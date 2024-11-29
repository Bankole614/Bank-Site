

const Value = [
  {
    id: 1,
    title: 'Integrity',
    description: 'We conduct ourselves with utmost honesty, transparency, and ethical behaviour. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.'
  },
  {
    id: 2,
    title: 'Customer Centricity',
    description: 'Our customers are at the heart of everything we do. We are dedicated to understanding their need, providing personalized solutions, and delivering exceptional service that exceeds expectations.'
  },
  {
    id: 3,
    title: 'Collaboration',
    description: 'We foster a collaborative nd inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our emloyees, we drive innovation and achieve greater success together.'
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customets. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.'
  },
]


const Values = () => {
  return (
    <div className="container pb-14">
      <div>
        <div className="mb-10">
          <p className="text-white mb-2 text-center lg:text-left text-3xl font-medium md:text-4xl">Our <span className="text-primary">Values</span></p>
          <p className="text-neutral-300 max-w-[1000px] text-center lg:text-left font-light">At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          {
            Value.map((data) => (
              <div key={data.id} className="border-l border-primary pl-4">
                <div className="flex flex-col gap-3">
                  <p className="text-2xl text-neutral-500 font-semibold">{data.title}</p>
                  <p className="text-neutral-300 font-light">{data.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Values