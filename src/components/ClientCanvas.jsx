/* eslint-disable unicorn/filename-case */
import { useEffect, useRef } from "react";

function ClientCanvas({ socket }) {
	const imgRef = useRef(null);
	//   useEffect(() => {
	//     socket.on("message", (data) => {
	//       toast.info(data.message);
	//     });
	//   }, []);
	//   useEffect(() => {
	//     socket.on("users", (data) => {
	//       setUsers(data);
	//       setUserNo(data.length);
	//     });
	//   }, []);
	useEffect(() => {
		socket.on("canvasImage", (data) => {
			imgRef.current.src = data;
		});
	}, []);
	return (
		<div className="container-fluid">
			<div className="row pb-2">
				<h1 className="display-5 pb-3 pt-4 text-center">
					{/* React Drawing App - users online:{userNo} */}
				</h1>
			</div>
			<div className="row mt-5">
				<div
					className="col-md-8 border-dark mx-auto mt-3 overflow-hidden border
          px-0"
					style={{ height: "500px" }}
				>
					<img className="w-100 h-100" ref={imgRef} src="" alt="image" />
				</div>
			</div>
		</div>
	);
}

export default ClientCanvas;
