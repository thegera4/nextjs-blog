import Head from "next/head";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta 
          name="description" 
          content="Send me a message!" 
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1515388210457824"
          crossorigin="anonymous"
        >
        </script>
      </Head>
      <ContactForm />
    </>
  )
}
