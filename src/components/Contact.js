const Contact = () => {
  return <div>
    <h1 className="font-bold text-3xl p-4 m-4">This is Contact Us page</h1>
  
    <form>
        <input type="text" className="border-black p-2 m-2" placeholder="name"></input>
        <input type="text" className="border-black p-2 m-2" placeholder="message"></input>
        <button className="bg-green-50 rounded-xl">Submit</button>
    </form>
    </div>;
};

export default Contact;
