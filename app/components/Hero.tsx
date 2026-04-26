"use client";

import CountUp from "./CountUp";

export default function Hero() {
	return (
		<section className="relative pt-10 md:pt-6 overflow-hidden bg-linear-to-br from-primary-dark via-primary to-primary-light">
			{/* Animated diagonal dot pattern */}
			<div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
				<div
					className="absolute animate-diagonal-drift"
					style={{
						width: "200%",
						height: "200%",
						top: "-50%",
						left: "-50%",
						backgroundImage:
							"radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
				<div className="max-w-3xl">
					<div>
						<span className="inline-block text-accent font-semibold text-sm tracking-wide uppercase mb-4">
							Cobrança extrajudicial humanizada
						</span>
					</div>

					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
						Recupere até <span className="text-accent">80%</span> dos seus
						créditos inadimplentes
					</h1>

					<p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
						Sem custo para sua empresa. Sem mensalidade. Sem taxa de contrato.
						Somos remunerados apenas no êxito da recuperação.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row gap-4">
						<a
							href="https://api.whatsapp.com/send?phone=5547999384960&text=Ol%C3%A1%2C%20gostaria%20de%20uma%20proposta%20para%20cobran%C3%A7a"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
							Solicite uma Proposta Grátis
						</a>
						<a
							href="#como-funciona"
							className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base"
						>
							Como Funciona
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</a>
					</div>
				</div>

				{/* Stats bar */}
				<div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
					{[
						{ target: 600, suffix: "+", label: "Clientes satisfeitos" },
						{ target: 80, suffix: "%", label: "Taxa de recuperação" },
						{ target: 100, suffix: "%", label: "Repasse do valor capital" },
						{ target: 5, suffix: "+", label: "Anos no mercado" },
					].map((stat) => (
						<div
							key={stat.label}
							className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6"
						>
							<CountUp
								target={stat.target}
								suffix={stat.suffix}
								className="text-2xl md:text-3xl font-bold text-accent inline-block"
							/>
							<div className="text-sm text-white/70 mt-1">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
