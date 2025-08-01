export default async function LaporanDetails({
    params,
}:{
    params: Promise<{ laporanId: string, jualbeliId: string}>;
}){
    const {laporanId, jualbeliId}= await params
    return <h1> {jualbeliId} pada tahun  {laporanId}</h1>;
}