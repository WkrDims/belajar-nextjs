export default async function MapelDetails({
    params,
}:{
    params: Promise<{ mapelId: string}>;
}){
    const MapelId = (await params).mapelId;
    return <h1>guru {MapelId} akan masuk kelas hari ini</h1>;
}