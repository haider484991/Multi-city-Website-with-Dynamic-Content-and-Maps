export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-12">
          {/* Disclaimer */}
          <div>
            <h3 className="font-bold mb-4">Disclaimer</h3>
            <p className="text-sm">
              Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Serv 1</li>
              <li>Serv 2</li>
              <li>Serv 3</li>
              <li>Serv 4</li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Settings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <p className="text-sm">555-555-5555</p>
          </div>
        </div>
      </div>
    </footer>
  );
}