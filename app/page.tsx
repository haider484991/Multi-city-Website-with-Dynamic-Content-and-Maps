import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Home Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 p-4 lg:p-8 rounded-lg">
              <h1 className="text-3xl lg:text-6xl font-bold">1000x750</h1>
            </div>
          </div>
        </div>
        <div className="bg-green-600 p-8 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
            Heading One (H1)
          </h2>
          <p className="text-white/90 mb-4 lg:mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link 
            href="#"
            className="bg-red-600 text-white px-4 lg:px-8 py-2 lg:py-3 rounded inline-block w-full lg:w-fit text-center hover:bg-red-700"
          >
            READ MORE
          </Link>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
          <div className="relative aspect-square h-64 lg:h-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-xl lg:text-4xl font-bold">
              650x650
            </div>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">Heading Two (H2)</h2>
            <p className="text-gray-600 text-sm lg:text-base">
              At [Your Company Name], we pride ourselves on delivering innovative solutions that push the boundaries of industry standards. Whether you need precision manufacturing, custom design, or tailored services, our team of experts is dedicated to meeting your unique needs. Our commitment to quality ensures that each project is completed with the highest attention to detail, ensuring long-lasting results that exceed expectations.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">Heading Three (H2)</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            At [Your Company Name], we pride ourselves on delivering innovative solutions that push the boundaries of industry standards. Whether you need precision manufacturing, custom design, or tailored services, our team of experts is dedicated to meeting your unique needs. Our commitment to quality ensures that each project is completed with the highest attention to detail, ensuring long-lasting results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className="bg-green-600 py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
            Finding a (keyword) Expert Is As Easy As 1, 2, 3!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {[
              {
                title: 'Step One - Call Us at 555-555-5555',
                description: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.'
              },
              {
                title: 'Step Two - Connect',
                description: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.'
              },
              {
                title: 'Step Three - Schedule',
                description: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-4 lg:p-8 rounded-lg">
                <div className="aspect-square h-32 lg:h-40 bg-gray-100 mb-4 lg:mb-6 flex items-center justify-center">
                  <span className="text-xl lg:text-4xl font-bold">Image</span>
                </div>
                <h3 className="font-bold mb-2 lg:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-xs lg:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
          <div className="relative aspect-square h-64 lg:h-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-xl lg:text-4xl font-bold">
              650x650
            </div>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">Heading Two (H2)</h2>
            <p className="text-gray-600 text-sm lg:text-base">
              At [Your Company Name], we pride ourselves on delivering innovative solutions that push the boundaries of industry standards. Whether you need precision manufacturing, custom design, or tailored services, our team of experts is dedicated to meeting your unique needs. Our commitment to quality ensures that each project is completed with the highest attention to detail, ensuring long-lasting results that exceed expectations.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">Heading Three (H2)</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            At [Your Company Name], we pride ourselves on delivering innovative solutions that push the boundaries of industry standards. Whether you need precision manufacturing, custom design, or tailored services, our team of experts is dedicated to meeting your unique needs. Our commitment to quality ensures that each project is completed with the highest attention to detail, ensuring long-lasting results that exceed expectations.
          </p>
        </div>

        <div className="mt-8 lg:mt-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-8">Heading Four (H2)</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            At [Your Company Name], we pride ourselves on delivering innovative solutions that push the boundaries of industry standards. Whether you need precision manufacturing, custom design, or tailored services, our team of experts is dedicated to meeting your unique needs. Our commitment to quality ensures that each project is completed with the highest attention to detail, ensuring long-lasting results that exceed expectations.
          </p>
        </div>
      </section>
    </div>
  );
}