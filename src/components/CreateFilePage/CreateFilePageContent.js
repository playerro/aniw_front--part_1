import CreateItemLanguageButtons from "@/components/UI/Create-Item-Buttons/CreateItemLanguageButtons";
import CreateFileForm from "./CreateFileForm";

function CreateFilePageContent() {
  return (
    <main className="border-t border-custom-gray-300 bg-white px-5 pb-10 pt-6 dark:border-custom-black-300 dark:bg-custom-black-100 lg:px-0 lg:pb-0">
      <section className="m-auto mb-10 w-full max-w-[712px]">
        <h1 className="mb-6 text-2xl font-semibold">Create a file</h1>
        <div className="flex flex-col gap-6">
          <CreateItemLanguageButtons />
          <CreateFileForm />
        </div>
      </section>
    </main>
  );
}

export default CreateFilePageContent;
