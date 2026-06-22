import { motion } from "framer-motion";
import pozaSolo from "./pozaSolo.png";
import pozaGrup from "./pozaGrup.png";

export default function BirthdayCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-2xl shadow-2xl p-6 max-w-md text-center">
          <div>
            <h1 className="ext-3xl font-bold text-purple-700 mb-4 text-center w-full">
              🎉🎉🎉🎉🎉 La multi ani Alexuuuuuuuuu! 🎉🎉🎉🎉🎉
            </h1>
            <div className="flex gamp-2 mb-4">
              <img src={pozaSolo} alt="Friend" className="w-1/2 rounded-lg" />
              <img src={pozaGrup} alt="grup" className="w-1/2 rounded-lg" />
            </div>

            <p className="text-lg text-gray-700 mb-4">
              De cand ai plecat din iasi, toate fetele au ramas nemaritate :(
              Suspsina pe la colturi, in speranta ca te vor mai vedea din nou la
              party si le vei mai spune cuvintele tale dulci.
            </p>

            <p className="text-md text-gray-600">
              Prima ta casa dansatoare iti ureaza la multi ani si spor la munca
              sa ajungi agent secret 00.7, spor la toate premiile de la
              bachatanama si spor la suflet sa ramai tot asa cum te stim!
            </p>
            <ul className="text-left mt-4 list-disc list-inside">
              <li>Adelina</li>
              <li>Alle</li>
              <li>Anastasia</li>
              <li>Andreea</li>
              <li>Razvan</li>
              <li>Mada Roman</li>
              <li>Steeeeeeef</li>
              <li>Petro</li>
              <li>Radu</li>
              <li>Rox</li>
              <li>Stefan</li>
              <li>Stefana</li>
              <li>Vlad</li>
              <li>Marius</li>
            </ul>

            <p>
              P.S. Pentru cadou, da-i un mesaj privat lui marius si spune-i ca
              ai nevoie sa iti ia pulsul, stie el ce inseamna.
            </p>

            <motion.div
              className="mt-6 text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
