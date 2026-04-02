import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";

const Cart = ({carts,setCarts}) => {
    // console.log(carts)

     const totalPrice = carts.reduce((sum, item) => sum + item.price, 0) 

     const handlePayment = () => {
        setCarts([])
             toast.success("Payment successful!")
     };

     const handleDelete = (item) => {
        // console.log("item")

        const filteredArray = carts.filter(c => c.id !== item.id)
        // console.log(filteredArray)
        setCarts(filteredArray)
             toast.success("Item deleted!")
     }


    return (
        <div className='p-10 shadow-lg rounded-lg'>
       <h1 className='text-2xl font-bold'>Your Cart</h1>

        {

            carts.length === 0 ? <div> <p className=" flex justify-center text-5xl "><CiShoppingCart /></p> <p className="text-center">Your cart is empty </p></div> : <>
            <div className='space-y-5 mt-5'>
    
        {
            carts.map(item => <div className=' border  md:px-10 py-5 rounded-lg' key={item.id}>
                <div className='flex gap-5 items-center justify-between  '>
                    <div className='flex gap-2 items-center'>
                    <img className='w-20 h-20 object-contain' src={item.image} />
                <div>
                <h2 className='text-xl font-bold'>{item.name}</h2>
                <h3 className='text-xl font-bold'>${item.price}</h3>
                </div>
                </div>
                <button onClick={() => handleDelete(item)} className="btn rounded-full btn-error ">Remove</button>
                </div>
            </div>)

        }
            </div>
            </>
        }


        <div  className="flex justify-between items-center bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$ {totalPrice}</div>

           </div>
          <button onClick={handlePayment} className="btn w-full bg-red-500 text-white p-5 mt-5 rounded-lg lg:text-3xl font-bold">Proceed to checkout</button>
        </div>
    );
};

export default Cart;