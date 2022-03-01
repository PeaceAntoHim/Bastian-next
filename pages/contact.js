import Head from 'next/head';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Field from '@components/Field';
import Layout from '@components/layout';
// import { useRouter } from 'next/router';
import ContactItem from '@components/ContactItem';
import SectionHeader from '@components/SectionHeader';
import withReactContent from 'sweetalert2-react-content'

export default function Contact({ data }) {

    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({});
    const [messages, setMessages] = useState(data);
    
       async function sendMessages(e) {
         e.preventDefault();

         const newMessages = { ...messages, ...formData };
         setMessages(newMessages);
     
         const response = await fetch('../api/messages', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json'},
             body: JSON.stringify(newMessages)
         })

         MySwal.fire(!response.ok ? 'Email was be used' : 'Data was sent succesfully');
         setFormData(!response.ok ? newMessages : '')

       }




  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Bastian</title>
      </Head>

      <section className="container mx-auto px-10">
          <SectionHeader>Contact</SectionHeader>
          <div className=" flex rounded-lg flex-wrap">
              <div className="md:w-6/12 w-full">
                  <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                      <ContactItem 
                          label="Mail"
                          value="stefanusfranssebastian@gmail.com"
                          icon="/mail.svg"
                          className="mt-20"
                      />
                      <ContactItem 
                          label="Phone"
                          value="+62 857-898-898"
                          icon="/phone.svg"
                          className="mt-5"
                      />
                      <ContactItem
                          label="Twitter"
                          value="@stefanusfranssebastian"
                          icon="/twitter.svg"   
                          className="mt-5"                     
                      />
                  </div>
              </div>
              <form className="md:w-6/12 w-full" onSubmit={sendMessages}>
                  <div className="lg-py-16 lg:px-20 md:p-14 p-10">
                      <div className="flex flex-wrap -mx-4">
                        <div className="lg:w-6/12 w-full px-4">
                            <Field 
                                label="Name"
                                name="name"
                                type="text"
                                onChange={e=> setFormData({ ...formData, name: e.target.value })}
                                value={formData.name ?? ""}
                            />
                        </div>
                        <div className="lg:w-6/12 w-full px-4">
                            <Field 
                                label="Email"
                                name="email"
                                type="email"
                                onChange={e=> setFormData({ ...formData, email: e.target.value })}
                                value={formData.email ?? ""}
                            />
                        </div>
                      </div>
                          <Field 
                                label="Subject"
                                name="subject"
                                type="text"
                                onChange={e=> setFormData({ ...formData, subject: e.target.value })}
                                value={formData.subject ?? ""}
                            />
                             <Field 
                                label="message"
                                name="message"
                                type="textarea"
                                className="h-40"
                                onChange={e=> setFormData({ ...formData, message: e.target.value })}
                                value={formData.message ?? ""}
                            />
                      <div className="text-right">
                        <button className="bg-black hover:bg-opacity-90 text-white transition py-3 px-10 font-semibold text-lg rounded-lg inline-block" type="submit">Submit</button>
                      </div>
                  </div>
              </form>
          </div>
      </section>
    </Layout>
  )
}