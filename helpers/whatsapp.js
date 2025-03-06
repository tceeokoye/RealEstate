const handleWhatsAppClick = () => {
    const phoneNumber = "+2348105175500";
    const message = "Hello TCEE, how much is the real-estate website";
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    window.open(whatsappUrl, "_blank");
  };
  
  export default handleWhatsAppClick;
  