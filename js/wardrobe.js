const wardrobe = ['tshirt.png','jeans.png','shirt.png']; // Images in assets/wardrobe
const container = document.getElementById('wardrobeContainer');

wardrobe.forEach(item => {
  const img = document.createElement('img');
  img.src = `assets/wardrobe/${item}`;
  img.classList.add('wardrobe-icon');
  img.addEventListener('click', () => {
    alert(`Selected: ${item}`);
    // You can later overlay the dress on camera preview
  });
  container.appendChild(img);
});
