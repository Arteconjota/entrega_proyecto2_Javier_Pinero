import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/public/github-logo.jpg", "GitHub")}
${Button("/public/linkedin-logo.jpg", "LinkedIn")}
</div>
`;