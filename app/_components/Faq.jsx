import React from 'react'

const questions = [
  {
    id: 1,
    question: 'What is a cover letter?',
    answer: 'A cover letter is a document sent with your resume to provide additional information on your skills and experience. It typically includes details on why you are qualified for the job and why you are interested in the position.'
  },
  {
    id: 2,
    question: 'Why do I need a cover letter?',
    answer: 'A cover letter helps to personalize your application, show your enthusiasm for the role, and provide context for your resume. It can give you an edge over other candidates by highlighting your unique qualifications.'
  },
  {
    id: 3,
    question: 'Can I customize this cover letter',
    answer: 'Yes, you can customize your cover letter by choosing different templates, editing the text, and adding personal touches.'
  },
  {
    id: 4,
    question: 'Is this service free to use?',
    answer: 'The cover letter generator offers both free and premium options.'
  },
  {
    id: 2,
    question: 'Can I download my cover letter once it’s ready?',
    answer: 'Yes, once your cover letter is complete, you can download it in various formats such as PDF or Word, making it easy to attach to your job application.'
  },
]

const Faq = () => {
  return (
    <div className='my-36'>
      <h1 className='text-center font-bold text-2xl md:text-3xl mb-10'>FAQS</h1>


      <div className="space-y-4 container mx-auto">

        {questions.map((item, index) => (


          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" close>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 key={item.id} className="font-medium">{item.question}</h2>

              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700" key={item.id}>
              {item.answer}
            </p>
          </details>



        ))}


      </div>

    </div>
  )
}

export default Faq