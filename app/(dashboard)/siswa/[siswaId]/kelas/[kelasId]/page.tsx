export default async function SiswaDetails({
    params,
}:{
    params: Promise<{ siswaId: string, kelasId: string}>;
}){
    const {siswaId, kelasId}= await params
    return <h1> siswa dengan {siswaId} masuk kekelas : {kelasId}</h1>;
}