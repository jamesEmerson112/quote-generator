use serde::Deserialize;
use std::env;
use warp::http::Method;
use warp::Filter;

#[derive(Deserialize)]
struct QuoteQuery {
    category: String,
}

#[tokio::main]
async fn main() {
    dotenv::dotenv().ok();

    let api_key = env::var("X_API_KEY").expect("X_API_KEY environment variable must be set");

    let cors = warp::cors()
        .allow_origin("https://jamesEmerson112.github.io")
        .allow_methods(&[Method::GET])
        .allow_headers(vec!["content-type"]);

    let api_key = warp::any().map(move || api_key.clone());

    let quote_route = warp::path!("api" / "quote")
        .and(warp::get())
        .and(warp::query::<QuoteQuery>())
        .and(api_key)
        .and_then(get_quote)
        .with(cors);

    println!("Server running on http://localhost:3030");
    warp::serve(quote_route).run(([0, 0, 0, 0], 3030)).await;
}

async fn get_quote(query: QuoteQuery, api_key: String) -> Result<impl warp::Reply, warp::Rejection> {
    let client = reqwest::Client::new();

    let url = format!(
        "https://api.api-ninjas.com/v1/quotes?category={}",
        query.category
    );

    let response = client
        .get(&url)
        .header("X-Api-Key", &api_key)
        .send()
        .await
        .map_err(|_| warp::reject::reject())?;

    let body: serde_json::Value = response
        .json()
        .await
        .map_err(|_| warp::reject::reject())?;

    Ok(warp::reply::json(&body))
}
