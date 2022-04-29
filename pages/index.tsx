import DialogWrapper from "@/components/Dialog";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import PriceSelect from "@/components/PriceSelect";
import { useAppContext } from "@/hooks/useAppContext";
import { useOrder } from "@/hooks/useOrder";
import { useState } from "react";
import { classNames } from "@/utils/index";

// this is just for demo, this could very well be a typography component, etc.
const Branding = () => {
  return (
    <>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" role={"heading"}>
        <span className="block text-indigo-600 xl:inline">Getting Insured</span>{" "}
        <span className="block  xl:inline">is just few clicks away</span>
      </h1>

      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        In less than 4 minutes, we’ll find you the best home or car insurance
        and get you covered instantly, online.
      </p>
    </>
  );
};


const navigation = [
  { name: "Products", href: "#" },
  { name: "Press", href: "#" },
  { name: "Company", href: "#" },
  { name: "We Are Hiring 💕", href: "#" },
];


const LeadForm = () => {
  const { appState } = useAppContext();
  const [formData, setFormData] = useState({
    email: "",
    age: 20,
    gender: "",
  });

  const { mutate, isLoading, isSuccess } = useOrder();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({
          ...formData,
          preferredPackageId: appState.preferredPackage,
        });
      }}
    >
      <div className="shadow overflow-hidden sm:rounded-md">
        {!isSuccess ? (
          <>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {`What's your email?`}
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={formData.email}
                    required
                    onChange={({ target }) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: target.value,
                      }))
                    }
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How old are you?
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="age"
                    value={formData.age}
                    required
                    onChange={({ target }) =>
                      setFormData((prev) => ({
                        ...prev,
                        age:
                          Number(target.value) > 100
                            ? 100
                            : Number(target.value),
                      }))
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What is your gender?
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender-name"
                    value={formData.gender}
                    onChange={({ target }) =>
                      setFormData((prev) => ({
                        ...prev,
                        gender: target.value,
                      }))
                    }
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"na"}>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                disabled={isLoading}
                className={classNames(
                  isLoading
                    ? "bg-blue-100 text-white "
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100",
                  " inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <div className="px-4 py-5 bg-white sm:p-6">
            Thank you for your interest in getting insured. We will get back to
          </div>
        )}
      </div>
    </form>
  );
};

export default function Home() {
  const { appState, setAppState } = useAppContext();
  return (
    <Container>
      <Navbar links={navigation} />

      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 h-full">
        <div className="text-center h-full">
          <section>
            <Branding />
          </section>
          <section className="mt-10">
            <PriceSelect />
            <DialogWrapper
              isOpen={appState.selected}
              title="Thank you for your interest!"
              titleMeta={"Few more details and we are ready to go!"}
              onClose={() =>
                setAppState((prev) => ({
                  ...prev,
                  appState: {
                    preferredPackage: prev.appState.preferredPackage,
                    selected: false,
                  },
                }))
              }
            >
              <LeadForm />
            </DialogWrapper>
          </section>
        </div>
      </main>
    </Container>
  );
}
