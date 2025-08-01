export default async function LaporanDetails({
    params,
}:{
    params: Promise<{ laporanId: string}>;
}){
    const LaporanId = (await params).laporanId;
    return <h1>Laporan pada {LaporanId}</h1>;
}