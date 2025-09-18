from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify blog list page
        page.goto("http://localhost:3000/blog")
        expect(page.get_by_role("heading", name="Blog")).to_be_visible()
        page.screenshot(path="verification/blog-list.png")

        # Verify blog post page
        page.get_by_role("link", name="My First Blog Post").click()
        expect(page.get_by_role("heading", name="Welcome to My Blog!")).to_be_visible()
        page.screenshot(path="verification/blog-post.png")

        browser.close()

if __name__ == "__main__":
    run()
