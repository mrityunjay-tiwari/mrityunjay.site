"use client";

import {motion} from "motion/react";
import {cn} from "@/lib/utils";
import {marker, sans} from "@/lib/fonts";
import {Input} from "../ui/input";

import {Controller} from "react-hook-form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "../ui/input-group";
import ParticleButton from "../particle-button/particle";
import {CursorClickIcon} from "../hover-icons/click";
import {sendContactEmail} from "@/app/actions/send-contact-email";
import {useState} from "react";
import {PiConfetti} from "react-icons/pi";
import { Spinner } from "../kibo-ui/spinner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 characters long")
    .max(20, "Contact number must be at most 20 characters long")
    .optional(),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNumber: "",
      email: "",
      message: "",
    },
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSending(true);

      await sendContactEmail(values);

      setIsSending(false);
      setIsSent(true);
      form.reset();

      // Reset button text after 2 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setIsSending(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // material-like easing
      }}
      className="md:max-w-2xl w-full flex flex-col items-center justify-center my-32"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-10">
        <h2
          className={cn(
            `${marker.className} text-4xl font-medium text-neutral-500 dark:text-neutral-100  border-b-4 border-orange-100`,
          )}
        >
          Contact
        </h2>
        <h2
          className={cn(
            `${sans.className}  text-neutral-500 dark:text-neutral-300`,
          )}
        >
          Get In Touch with me, I will respond asap.
        </h2>
      </div>
      <hr className="w-full border-0.5 border-neutral-200" />
      <div className="w-full flex flex-col items-start gap-3.5 mt-5">
        <div className="flex flex-col items-start gap-1">
          <h2
            className={`font-medium ${sans.className} text-neutral-600 dark:text-neutral-300`}
          >
            Say Hii..
          </h2>
          <p
            className={`text-sm ${sans.className} text-neutral-500 dark:text-neutral-400`}
          >{`Fill out the form below and I'll get back to you very soon.`}</p>
        </div>
        <div className="w-full flex flex-col items-start gap-1 mt-2.5">
          <form
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(onSubmit)}
            className={`max-w-2xl w-full ${sans.className}`}
          >
            <FieldGroup>
              <div className="flex flex-col md:flex-row md:justify-between w-full gap-5">
                <Controller
                  name="name"
                  control={form.control}
                  render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor="form-rhf-demo-title"
                        className={cn(`text-neutral-500 gap-0`)}
                      >
                        Name<span className="text-red-500">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        // id="form-rhf-demo-title"
                        // aria-invalid={fieldState.invalid}
                        placeholder="Your Full Name"
                        className="shadow-none rounded-lg"
                        // autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="contactNumber"
                  control={form.control}
                  render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor="form-rhf-demo-link"
                        className={cn(`text-neutral-500 gap-0`)}
                      >
                        Contact Number
                      </FieldLabel>
                      <Input
                        {...field}
                        // id="form-rhf-demo-link"
                        // aria-invalid={fieldState.invalid}
                        placeholder="+1 (1234) xxx-xxxx"
                        className="shadow-none rounded-lg"
                        // autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <Controller
                name="email"
                control={form.control}
                render={({field, fieldState}) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="form-rhf-demo-link"
                      className={cn(`text-neutral-500 gap-0`)}
                    >
                      Email<span className="text-red-500">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      // id="form-rhf-demo-link"
                      // aria-invalid={fieldState.invalid}
                      placeholder="your@email.com"
                      className="shadow-none rounded-lg"
                      // autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="message"
                control={form.control}
                render={({field, fieldState}) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="form-rhf-demo-description"
                      className={cn(`text-neutral-500 gap-0`)}
                    >
                      Message<span className="text-red-500">*</span>
                    </FieldLabel>
                    <InputGroup className="rounded-xl">
                      <InputGroupTextarea
                        {...field}
                        //   id="form-rhf-demo-description"
                        placeholder="Write the message or say Hi.."
                        //   rows={6}
                        className="min-h-24 resize-none hide-scrollbar shadow-none"
                        //   aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end"></InputGroupAddon>
                    </InputGroup>
                    {/* <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription> */}
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="flex gap-5">
                <ParticleButton
                  type="submit"
                  disabled={isSending || isSent}
                  form="form-rhf-demo"
                  className={cn(
                    "rounded-full shadow font-normal transition-all",
                    isSending
                      ? "bg-neutral-500 cursor-not-allowed"
                      : isSent
                        ? "bg-green-700 text-white"
                        : "bg-neutral-700 hover:bg-neutral-900 text-white hover:text-white",
                  )}
                  particleClass="bg-black dark:bg-white"
                >
                  {isSending ? (
                    <>
                        Sending... <Spinner variant={"throbber"} />
                    </>
                  ) : isSent ? (
                    <>
                      Message Sent <PiConfetti />
                    </>
                  ) : (
                    <>
                      Send Message <CursorClickIcon />
                    </>
                  )}
                </ParticleButton>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
