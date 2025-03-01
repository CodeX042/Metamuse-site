/* eslint-disable unicorn/filename-case */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import Canvas from "./Canvas";

function Room({ socket }) {
	const canvasRef = useRef(null);
	const ctx = useRef(null);
	const [color, setColor] = useState("#000000");
	const [brushSize, setBrushSize] = useState(5);
	const [elements, setElements] = useState([]);
	const [history, setHistory] = useState([]);
	const [tool, setTool] = useState("pencil");

	useEffect(() => {
		socket.on("message", (data) => {
			toast.info(data.message);
		});
	}, []);

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		context.fillStyle = "white";
		context.fillRect(0, 0, canvas.width, canvas.height);
		setElements([]);
	};

	const undo = () => {
		setHistory(prevHistory => [...prevHistory, elements[elements.length - 1]]);
		setElements(prevElements =>
			prevElements.filter((ele, index) => index !== elements.length - 1),
		);
	};

	const redo = () => {
		setElements(prevElements => [...prevElements, history[history.length - 1]]);
		setHistory(prevHistory =>
			prevHistory.filter((ele, index) => index !== history.length - 1),
		);
	};

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<div className="flex-[0.15] overflow-y-auto bg-white p-4 shadow-lg">
				<h2 className="mb-4 text-xl font-bold">Tools</h2>
				<div className="space-y-2">
					<button
						className={`w-full rounded p-2 text-left ${
							tool === "pencil" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => setTool("pencil")}
					>
						Pencil
					</button>
					<button
						className={`w-full rounded p-2 text-left ${
							tool === "line" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => setTool("line")}
					>
						Line
					</button>
					<button
						className={`w-full rounded p-2 text-left ${
							tool === "rect" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => setTool("rect")}
					>
						Rectangle
					</button>
					<button
						className={`w-full rounded p-2 text-left ${
							tool === "circle" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => setTool("circle")}
					>
						Circle
					</button>
					<button
						className={`w-full rounded p-2 text-left ${
							tool === "eraser" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => setTool("eraser")}
					>
						Eraser
					</button>
					<button
						className={`w-full rounded p-2 text-left ${
							tool === "text" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => setTool("text")}
					>
						Text
					</button>
				</div>

				<h2 className="mb-4 mt-6 text-xl font-bold">Options</h2>
				<div className="space-y-4">
					<div>
						<label className="mb-1 block text-sm font-medium">Color</label>
						<input
							type="color"
							value={color}
							onChange={e => setColor(e.target.value)}
							className="h-10 w-full"
						/>
					</div>
					<div>
						<label className="mb-1 block text-sm font-medium">Brush Size</label>
						<input
							type="range"
							min="1"
							max="50"
							value={brushSize}
							onChange={e => setBrushSize(e.target.value)}
							className="w-full"
						/>
					</div>
				</div>

				<div className="mt-6 space-y-2">
					<button
						className="w-full rounded bg-red-500 p-2 text-white hover:bg-red-600"
						onClick={clearCanvas}
					>
						Clear Canvas
					</button>
					<button
						className="w-full rounded bg-gray-500 p-2 text-white hover:bg-gray-600 disabled:opacity-50"
						disabled={elements.length === 0}
						onClick={undo}
					>
						Undo
					</button>
					<button
						className="w-full rounded bg-gray-500 p-2 text-white hover:bg-gray-600 disabled:opacity-50"
						disabled={history.length < 1}
						onClick={redo}
					>
						Redo
					</button>
				</div>
			</div>

			{/* Canvas Area */}
			<div className="flex-[0.85] w-[70%] h-full p-4">
				<Canvas
					canvasRef={canvasRef}
					ctx={ctx}
					color={color}
					brushSize={brushSize}
					setElements={setElements}
					elements={elements}
					tool={tool}
					socket={socket}
				/>
			</div>
		</div>
	);
}

export default Room;
