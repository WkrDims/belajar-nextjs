export default async function BlogDetails({
    params,
}:{
    params: Promise<{ siswaId: string}>;
}){
    const SiswaId = (await params).siswaId;
    return <h1>Siswa dengan id {SiswaId}</h1>;
}