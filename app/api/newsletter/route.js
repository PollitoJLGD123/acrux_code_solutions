import { promises as fs } from 'fs';
import path from 'path';

// Ruta al archivo JSON
const dataFilePath = path.join(process.cwd(), 'data', 'newsletter.json');

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    // Validaciones básicas
    if (!email || !email.includes('@')) {
      return Response.json({ success: false, message: 'Email inválido' }, { status: 400 });
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
      return Response.json({ success: false, message: 'Este email ya está suscrito' }, { status: 409 });
    }

    // Agregar nuevo suscriptor
    newsletterData.subscribers.push(email);

    // Escribir de vuelta al archivo
    await fs.writeFile(dataFilePath, JSON.stringify(newsletterData, null, 2), 'utf8');

    // Retornar respuesta exitosa
    return Response.json({ success: true, message: 'Suscripción exitosa' });
  } catch (error) {
    console.error('Error al procesar la suscripción:', error);
    return Response.json(
      { success: false, message: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}