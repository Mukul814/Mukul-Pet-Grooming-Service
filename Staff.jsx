import React from 'react';

function Staff() {
  const staffMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Senior Pet Groomer',
      experience: '8 Years Experience',
      specialty: 'Expert in large breed grooming and behavioral handling'
    },
    {
      name: 'Priya Sharma',
      role: 'Pet Stylist',
      experience: '5 Years Experience',
      specialty: 'Specialist in small breeds and creative styling'
    },
    {
      name: 'Arjun Singh',
      role: 'Veterinary Assistant',
      experience: '6 Years Experience',
      specialty: 'Health checkups and medical grooming needs'
    },
    {
      name: 'Kavya Patel',
      role: 'Cat Grooming Specialist',
      experience: '4 Years Experience',
      specialty: 'Expert in feline grooming and stress-free handling'
    }
  ];

  return (
    <section id="staff" className="staff">
      <div className="container">
        <h2>Meet Our Expert Team</h2>
        <p className="subtitle">Passionate professionals who treat your pets like family</p>
        
        <div className="staff-grid">
          {staffMembers.map((member, index) => (
            <div key={index} className="staff-card">
              <div className="staff-avatar">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
              <div className="experience">{member.experience}</div>
              <p className="specialty">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;