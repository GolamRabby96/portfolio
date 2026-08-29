import React, { useEffect, useRef } from "react";
import "./BackgroundEffect.css";

const BackgroundEffect = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let width = window.innerWidth;
		let height = window.innerHeight;
		let animationFrameId = null;
		let particles = [];
		let mouse = { x: null, y: null, radius: 150 };

		const isTouchDevice = () => {
			return "ontouchstart" in window || navigator.maxTouchPoints > 0;
		};

		const resizeCanvas = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
			initParticles();
		};

		const initParticles = () => {
			particles = [];
			const numberOfParticles = isTouchDevice() ? 40 : Math.floor((width * height) / 12000);
			for (let i = 0; i < numberOfParticles; i++) {
				particles.push({
					x: Math.random() * width,
					y: Math.random() * height,
					vx: (Math.random() - 0.5) * 0.5,
					vy: (Math.random() - 0.5) * 0.5,
					radius: Math.random() * 2 + 1,
				});
			}
		};

		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		const handleTouchMove = (e) => {
			if (e.touches.length > 0) {
				mouse.x = e.touches[0].clientX;
				mouse.y = e.touches[0].clientY;
			}
		};

		const handleMouseLeave = () => {
			mouse.x = null;
			mouse.y = null;
		};

		const animate = () => {
			ctx.clearRect(0, 0, width, height);

			particles.forEach((p) => {
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0 || p.x > width) p.vx *= -1;
				if (p.y < 0 || p.y > height) p.vy *= -1;

				if (mouse.x != null && mouse.y != null) {
					const dx = mouse.x - p.x;
					const dy = mouse.y - p.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < mouse.radius) {
						const force = (mouse.radius - distance) / mouse.radius;
						p.x += dx * force * 0.03;
						p.y += dy * force * 0.03;
					}
				}

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(0, 229, 255, 0.9)";
				ctx.shadowBlur = 8;
				ctx.shadowColor = "rgba(0, 229, 255, 0.6)";
				ctx.fill();
				ctx.shadowBlur = 0;
			});

			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 140) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(0, 229, 255, ${0.35 * (1 - distance / 140)})`;
						ctx.lineWidth = 1;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}

				if (mouse.x != null && mouse.y != null) {
					const dx = mouse.x - particles[i].x;
					const dy = mouse.y - particles[i].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < mouse.radius) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(37, 211, 102, ${0.7 * (1 - distance / mouse.radius)})`;
						ctx.lineWidth = 1.5;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(mouse.x, mouse.y);
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("touchmove", handleTouchMove, { passive: true });
		window.addEventListener("mouseleave", handleMouseLeave);

		if (!isTouchDevice()) {
			animate();
		} else {
			animationFrameId = requestAnimationFrame(animate);
		}

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []);

	return <canvas ref={canvasRef} className="background-canvas" />;
};

export default BackgroundEffect;
