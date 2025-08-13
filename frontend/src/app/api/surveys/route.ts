import { Survey } from '@/types/survey';

export const dynamic = 'force-dynamic'; // dev cache'ini kapat

let surveys: Survey[] = [];

export async function GET() {
  return Response.json(surveys, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as Omit<Survey, 'id' | 'createdAt'>;
    const survey: Survey = { id: Date.now().toString(), createdAt: Date.now(), ...body };
    surveys.push(survey);
    return Response.json({ ok: true, id: survey.id }, { status: 201 });
  } catch (e) {
    return Response.json({ ok: false, error: (e as Error).message }, { status: 400 });
  }
}