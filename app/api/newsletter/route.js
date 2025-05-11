const path = require('node:path');
const dataFilePath = path.join(process.cwd(), 'data', 'newsletter.json');
const fs = require('node:fs/promises');

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    // Validaciones básicas
    if (!email || !email.includes('@')) {
      return Response.json({ status: 400 });
    }

    // Leer el archivo actual
    let newsletterData;
    try {
      const fileContents = await fs.readFile(dataFilePath, 'utf8');
      newsletterData = JSON.parse(fileContents);
    } catch (error) {
      // Si el archivo no existe o está corrupto, inicializamos la estructura
      newsletterData = { subscribers: [] };
    }

    // Verificar si el email ya está suscrito
    if (newsletterData.subscribers.includes(email)) {
      return Response.json({ status: 409 });
    }

    // Agregar nuevo suscriptor
    newsletterData.subscribers.push(email);

    // Escribir de vuelta al archivo
    await fs.writeFile(dataFilePath, JSON.stringify(newsletterData, null, 2), 'utf8');

    // Retornar respuesta exitosa
    return Response.json({ status: 200 });
  } catch (error) {
    console.error('Error al procesar la suscripción:', error);
    return Response.json({ status: 500 });
  }
}