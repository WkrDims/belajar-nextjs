export default async function BlogDetails({
    params,
}:{
    params: Promise<{ blogId: string}>;
}){
    const BlogId = (await params).blogId;
    return <h1>Artikel ke {BlogId}</h1>;
}