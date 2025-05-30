import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { FiUser, FiMail, FiEdit3 } from "react-icons/fi";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const [cursorBlink, setCursorBlink] = useState<boolean>(true);
  const [, setError] = useState<string | any>(null);

  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "subject") setSubject(value);
    else if (name === "message") setMessage(value);
    setLastUpdatedField(name);
  };

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await axios.post(apiBaseUrl, data);
      console.log(response);
      toast.success(toastMessages.successEmailSent.en);
    } catch (error) {
      console.log(error);
      toast.error(toastMessages.failedEmailSent.en);
      setError("An Error occurred, try again later");
    }
  };

  const wordWrap = (text: string, maxLineLength: number, indentation: string) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => clearInterval(blinkInterval);
  }, []);

  const codeSnippet = `
import  { useState } from "react";

//  Spreading Stardust: 
// Crafting Cosmic Email 

const [sender, setSender] = "${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}";
const [recipient, setRecipient] = "${email}${lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""}";
const [subject, setSubject] = 
"${subject}${lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""}";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋
Across the cosmos, a message for you:
"${wordWrap(message, 40, " ")}"${lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""}
Wishing you stardust dreams,
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}\`
`;

  return (
    <React.Fragment>
      <section className="contact-container w-full min-[1921px]:px-[55rem] mt-16" id="contact">
        <div className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16" ref={ref}>
          <div className="flex flex-row justify-center items-start gap-20 px-24 pt-32 mb-32 max-lg:flex-col max-lg:px-6">
            
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-1/2 max-lg:hidden bg-gradient-to-br from-[--blackblue] to-[--darkblue] text-[--white] p-12 rounded-2xl border-[0.3rem] border-[--lightblue] shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
            >
              <Highlight code={codeSnippet} language="tsx" theme={themes.nightOwl}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-base leading-relaxed`} style={style}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-1/2 max-lg:w-full bg-[--icewhite] dark:bg-[--blackblue] shadow-2xl p-10 rounded-2xl flex flex-col gap-8 transition-all duration-300"
              onSubmit={notifySentForm}
              autoComplete="off"
            >
              <h3 className="text-4xl font-bold text-[--black] dark:text-white mb-4">Let’s Connect</h3>

              {contactData.inputfields.map((input, index) => {
                const Icon = input.name === "name" ? FiUser : input.name === "email" ? FiMail : FiEdit3;

                return (
                  <label key={index} className="relative w-full">
                    <Icon className="absolute top-4 left-4 text-xl text-[--orange]" />
                    <input
                      type={input.type}
                      name={input.name}
                      value={
                        input.name === "name"
                          ? name
                          : input.name === "email"
                          ? email
                          : input.name === "subject"
                          ? subject
                          : message
                      }
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus(input.name)}
                      onMouseEnter={() => handleInputFocus(input.name)}
                      placeholder={input.placeholder.en}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl text-base bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 ring-[--orange] dark:text-white dark:placeholder-gray-400 transition-all"
                    />
                  </label>
                );
              })}

              <label className="relative w-full">
                <textarea
                  rows={contactData.textarea.rows}
                  placeholder={contactData.textarea.placeholder.en}
                  name={contactData.textarea.name}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus(contactData.textarea.name)}
                  onMouseEnter={() => handleInputFocus(contactData.textarea.name)}
                  className="w-full pl-4 pr-4 py-4 rounded-xl text-base bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 ring-[--orange] dark:text-white dark:placeholder-gray-400 transition-all resize-none"
                />
              </label>

              <div className="flex items-start gap-4 text-base max-sm:text-sm">
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                  className="w-5 h-5 accent-[--orange] mt-1"
                />
                <label htmlFor="checkbox-label" className="text-xl dark:text-[--icewhite] font-medium">
                  {contactData.privacyOptIn.checkbox.en}
                </label>
              </div>

              <p className="text-base max-sm:text-sm mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {contactData.privacyOptIn.description.en}
              </p>

              <Button
                value={contactData.button.value.en}
                iconSVG={contactData.icon}
                buttoncolor={contactData.colors.main}
                iconcolor={contactData.colors.icon}
                type="submit"
                elementType="input"
              />

              <ToastContainer
                className="w-max text-lg block p-3 max-lg:w-full"
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                theme={theme}
              />
            </motion.form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
