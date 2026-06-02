import requests
from bs4 import BeautifulSoup
import pandas as pd
from config import URL

def get_html(url):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return response.text
    else:
        print("Failed to fetch website")
        return None


def parse_data(html):
    soup = BeautifulSoup(html, "html.parser")

    products = []

    items = soup.select(".thumbnail")

    for item in items:

        name = item.select_one(".title")
        price = item.select_one(".price")
        rating = item.select_one(".ratings p")

        if name and price and rating:

            products.append({
                "Name": name.text.strip(),
                "Price": price.text.strip(),
                "Rating": rating.text.strip()
            })

    return products


def save_csv(data):

    df = pd.DataFrame(data)

    df.to_csv("products.csv", index=False)

    print("✅ products.csv created successfully")


def main():

    print("🔄 Scraping started...")

    html = get_html(URL)

    if html:
        data = parse_data(html)

        save_csv(data)

        print("🎉 Scraping completed successfully!")

    else:
        print("❌ No data found")


if __name__ == "__main__":
    main()