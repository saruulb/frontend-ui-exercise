const Contact = () => {
	return (
		<section id="Contact">
			<div class = "contactContainer">
				<div class = "contactTextContainer">
					<h1 class = "ContactUs">Contact Us</h1>
					<h3 class = "ContactSub">Please send us an email if you have any questions or would like to reach out</h3>
				</div>
				<form>
					<div class = "ContactInput">
						<input class = "ContactName" type = "text" placeholder="Name"/>
						<input class = "ContactMail" type = "text" placeholder="Email"/>
					</div>
					<div class = "ContactMessageContainer">
						<textarea class = "ContactMessage" type = "text" placeholder="Message Us" name="ContactMessage"/>
					</div>
					<div class = "ButtonContainer">
						<button className="Button"> Contact Us </button>
					</div>
				</form>
			</div>
		</section>
	)
	}

export default Contact;
