import React from "react";
import review from "../image/userreview/review.jpg";
import "./UserReviews.css";
const UserReviews = () => {
	return (
		<div className="TopUserReview">
			<div className="container-fluid shadow mt-5 userReviewContainer ">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="userReviewSlider p-5 ">
								<div
									id="carouselExampleControls"
									class="carousel slide"
									data-bs-ride="carousel"
								>
									<div class="carousel-inner userReviewSliderPart">
										<div class="carousel-item active text-center pt-5">
											<h1>gaborbecsei</h1>
											<div className="reviewDevider"></div>
											<p>
												I hate the short: "good-excellent" reviews, he really
												deserves a few words! He has boring but very accurate
												communication what finally lead the project to move
												forward, thanks to him! strongly recommended working
												with this vendor! Good job! Thank you!
											</p>
										</div>
										<div class="carousel-item text-center pt-5">
											<h1>sanjaysharma1</h1>
											<div className="reviewDevider"></div>
											<p>
												He is very knowledgeable and expert in his work,
												professional and know how to work. I will strongly
												recommend working with this person. Love his work. Give
												him a chance to work to see yourself. EXCELLENT.
											</p>
										</div>
										<div class="carousel-item text-center pt-5">
											<h1>sanjaysharma1</h1>
											<div className="reviewDevider"></div>
											<p>
												This person is excellent for the project, very helpful
												and knowledgeable. HIGHLY RECOMMENDED and EXCELLENT in
												his work. 5 STARS to him ***** Always ready to help even
												after the delivery. This is my SECOND PROJECT and again
												highly satisfied as expected. A big Thumbs up! Thanks
												for the excellent delivery.
											</p>
										</div>
										<div class="carousel-item text-center pt-5">
											<h1>jaiserve</h1>
											<div className="reviewDevider"></div>
											<p>
												Expert in his job, excellent quality, will be working
												more in future
											</p>
										</div>
									</div>
									<button
										class="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleControls"
										data-bs-slide="prev"
									>
										<span
											class="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Previous</span>
									</button>
									<button
										class="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleControls"
										data-bs-slide="next"
									>
										<span
											class="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserReviews;
