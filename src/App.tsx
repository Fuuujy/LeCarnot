import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Mail, ChevronRight, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 1. Haut de page (L'accroche) */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Image pour ordinateur (Desktop) */}
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop"
            alt="Plats sur table de bistrot"
            className="hidden lg:block w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Image pour mobile et tablette */}
          <img
            src="/tel.jpg"
            alt="Plats sur table de bistrot"
            className="block lg:hidden w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20 md:mt-16 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl lg:text-8xl text-white font-serif mb-4 md:mb-6 drop-shadow-lg uppercase tracking-wider"
          >
            Le Carnot
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-stone-100 font-light mb-10 md:mb-12 tracking-wide drop-shadow-md px-4"
          >
            Établissement fondé en 1908
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a 
              href="tel:+33951443564" 
              className="px-8 py-4 md:py-5 bg-red-900 hover:bg-red-800 text-white rounded-full transition-colors text-sm uppercase tracking-widest font-medium w-full sm:w-auto shadow-lg"
            >
              Réserver une table
            </a>
            <a 
              href="/carte.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 md:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-full transition-colors text-sm uppercase tracking-widest font-medium w-full sm:w-auto shadow-lg"
            >
              Voir la carte
            </a>
          </motion.div>
        </div>

        {/* Indicateur de défilement */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </section>

      {/* 2. Les informations vitales (Le bloc pratique) */}
      <section className="bg-stone-50 px-4 relative z-10 pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-12 md:pb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-stone-900 p-8 md:p-10 rounded-2xl shadow-xl border border-stone-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <a href="tel:+33951443564" className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors duration-300">
              <Phone className="w-7 h-7 text-red-700 group-hover:text-white transition-colors duration-300" />
            </a>
            <h3 className="text-white font-serif text-2xl mb-4">Nous contacter</h3>
            <a href="tel:+33951443564" className="text-stone-300 mb-6 hover:text-white transition-colors text-lg">09 51 44 35 64</a>
            <div className="mt-auto">
              <a href="tel:+33951443564" className="inline-flex items-center gap-2 text-red-700 hover:text-red-500 text-sm uppercase tracking-widest font-medium transition-colors">
                Appeler <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-stone-900 p-8 md:p-10 rounded-2xl shadow-xl border border-stone-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <a href="https://maps.google.com/?q=55+Bd+Carnot,+78110+Le+Vésinet" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors duration-300">
              <MapPin className="w-7 h-7 text-red-700 group-hover:text-white transition-colors duration-300" />
            </a>
            <h3 className="text-white font-serif text-2xl mb-4">Adresse</h3>
            <p className="text-stone-300 mb-6 text-lg">55 Bd Carnot<br/>78110 Le Vésinet</p>
            <div className="mt-auto">
              <a href="https://maps.google.com/?q=55+Bd+Carnot,+78110+Le+Vésinet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-700 hover:text-red-500 text-sm uppercase tracking-widest font-medium transition-colors">
                Itinéraire <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-stone-900 p-8 md:p-10 rounded-2xl shadow-xl border border-stone-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors duration-300">
              <Clock className="w-7 h-7 text-red-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-white font-serif text-2xl mb-4">Horaires</h3>
            <p className="text-stone-300 mb-1 text-lg">Mar - Sam : 07h00 - 00h00</p>
            <p className="text-stone-300 mb-6 text-lg">Dim - Lun : 08h00 - 20h00</p>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-stone-500 text-sm uppercase tracking-widest font-medium">
                Ouvert 7j/7
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Le Menu (L'aperçu) */}
      <section id="menu" className="pt-12 pb-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Nos Plats Phares</h2>
            <div className="w-16 h-px bg-red-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Dish 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100"
            >
              <div className="h-64 overflow-hidden">
                {/* Image locale : oeuf-mayo.jpg */}
                <img 
                  src="/oeuf-mayo.jpg" 
                  alt="Œuf bio et mayonnaise maison" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-stone-900">Œuf bio et mayonnaise maison</h3>
                  <span className="text-red-900 font-medium">6,5€</span>
                </div>
                <p className="text-stone-600 text-sm">Un grand classique de la brasserie, préparé avec soin et générosité.</p>
              </div>
            </motion.div>

            {/* Dish 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100"
            >
              <div className="h-64 overflow-hidden">
                {/* Image locale : burger.jpg */}
                <img 
                  src="/burger.jpg" 
                  alt="Cheeseburger le Carnot" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-stone-900">Cheeseburger le Carnot</h3>
                  <span className="text-red-900 font-medium">16€</span>
                </div>
                <p className="text-stone-600 text-sm">Steak haché minute, reblochon, bacon, tomates, accompagné de frites maison et salade.</p>
              </div>
            </motion.div>

            {/* Dish 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100"
            >
              <div className="h-64 overflow-hidden">
                {/* Image locale : desserts.jpg */}
                <img 
                  src="/desserts.jpg" 
                  alt="Crème brulée et desserts" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-stone-900">Crème brulée</h3>
                  <span className="text-red-900 font-medium">7,5€</span>
                </div>
                <p className="text-stone-600 text-sm">Découvrez nos desserts maison : crème brulée, mousse au chocolat et tarte du jour.</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <a 
              href="/Menu Carnot A4+.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-300 hover:border-stone-900 text-stone-900 rounded-full transition-colors text-sm uppercase tracking-widest font-medium"
            >
              Menu complet
            </a>
          </div>
        </div>
      </section>

      {/* 5. La preuve sociale */}
      <section className="py-24 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-12">Ce que disent nos clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-800 text-red-800" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-6">"J'ai l'habitude de fréquenter le Carnot, je ne suis jamais déçu que se soit la cuisine ou la gentillesse du personnel. Un endroit réconfortant ou l'on passe toujours un très bon moment."</p>
              <p className="font-medium text-stone-900">— Louise Llinares</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-800 text-red-800" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-6">"Cuisine traditionnelle française excellente, menu du jour varié et sans frontières parfois donc belle découvertes culinaires...service agréable, nouvelle ambiance au Vésinet !!!! Il était temps !!!"</p>
              <p className="font-medium text-stone-900">— Emilie Noé</p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-stone-600 text-sm">Noté 4.8/5 sur plus de 100 avis Google</p>
          </div>
        </div>
      </section>

      {/* 6. Le "Bas de page" (Le pied de page) */}
      <footer className="bg-stone-950 text-stone-400 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-white mb-6">Le Carnot</h2>
            <p className="mb-6 max-w-sm">
              L'adresse incontournable pour les amoureux de la cuisine traditionnelle française.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lecarnotvesinet/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-red-900 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div id="reserver">
            <h3 className="text-white font-serif text-xl mb-6">Réservation</h3>
            <a href="tel:+33951443564" className="block text-red-800 hover:text-red-700 text-lg mb-4">
              09 51 44 35 64
            </a>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-stone-800 text-sm text-center">
          <p>© {new Date().getFullYear()} Le Carnot. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
