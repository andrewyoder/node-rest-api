import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import EmailForm from "../src/email-form";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <EmailForm />
    </StrictMode>
);