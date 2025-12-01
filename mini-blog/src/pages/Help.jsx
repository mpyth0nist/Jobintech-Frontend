import React, { useState } from 'react';

function Help() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Comment créer un compte ?",
      answer: "Pour créer un compte, cliquez sur 'Profile' dans le menu de navigation et suivez les instructions."
    },
    {
      question: "Comment publier un article ?",
      answer: "Connectez-vous à votre compte admin, puis accédez à la section Articles pour publier du nouveau contenu."
    },
    {
      question: "Comment laisser un commentaire ?",
      answer: "Ouvrez un article et faites défiler jusqu'à la section commentaires en bas de la page."
    },
    {
      question: "Puis-je modifier mon profil ?",
      answer: "Oui, rendez-vous dans la section Profile où vous pouvez mettre à jour vos informations personnelles."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-8">Questions fréquentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-900/50 hover:bg-white/5 transition-all duration-200 text-left"
                >
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-900/30">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;