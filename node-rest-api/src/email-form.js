export default function getEmails() {
  return (
    <EmailForm>
        <h2>Get Emails (JSX)</h2>
        <form action="restockAlert" method="post">
            <pre>

                <label for="product">Product Name</label>
                <input type="text" name="product" id="product" />

                <label for="password">Password</label>
                <input type="text" name="password" id="password" />

                <button type="submit">Submit</button>

            </pre>
        </form>
    </EmailForm>
  );
}