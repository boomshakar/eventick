import styled from "styled-components";

export const PageSection = styled.div``;
export const PageContain = styled.div`
	display: table;
	width: 100%;
	height: 100vh;
	text-align: center;
`;
export const PageContent = styled.div`
	display: table-cell;
	vertical-align: middle;

	h1 {
		font-size: clamp(1.6rem, 10vw, 3.5rem);
		display: inline-block;
		padding-right: 12px;
		animation: type 0.5s alternate infinite;

		@keyframes type {
			from {
				box-shadow: inset -3px 0px 0px #888;
			}
			to {
				box-shadow: inset -3px 0px 0px transparent;
			}
		}
	}
	p {
		font-size: clamp(1rem, 3vw, 1.5rem);
	}
`;
