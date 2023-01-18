import Head from "next/head";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta 
          name="description" 
          content="Send me a message!" 
        />
      </Head>
      <ContactForm />
    </>
  )
}
