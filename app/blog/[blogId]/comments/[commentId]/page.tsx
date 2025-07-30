export default async function BlogDetails({
    params,
}:{
    params: Promise<{ blogId: string, commentId: string}>;
}){
    const {blogId, commentId}= await params
    return <h1>Comments {commentId} for blog {blogId}</h1>;
}