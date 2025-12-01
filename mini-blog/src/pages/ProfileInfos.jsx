export default function ProfileInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Informations personnelles</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
          <p className="text-white text-lg">Oussama</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Prénom</label>
          <p className="text-white text-lg">Aananouch</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <p className="text-white text-lg">oussama.ananouch@jobintech.ma</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Téléphone</label>
          <p className="text-white text-lg">+212 6 12 34 56 78</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Ville</label>
          <p className="text-white text-lg">Rabat</p>
        </div>
      </div>
    </div>
  );
}