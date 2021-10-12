import logo from "./../assets/logo.svg";

const Footer = () => {
	return (
		<section id="Footer">
			<div class="FooterContainer">
				<div class="FooterContent">
					<img src = {logo} class = "FooterLogo" alt="logo" />
					<h1 class = "FooterText"> @2021 Digital Embassy </h1>
				</div>
			</div>
		</section>
	)
}

export default Footer;
