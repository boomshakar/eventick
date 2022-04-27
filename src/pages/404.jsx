import { PageContain, PageContent, PageSection } from "../styled/404.styled";

const ErrorPage = () => {
	return (
		<PageSection>
			<PageContain>
				<PageContent>
					<h1>Error 404</h1>
					<p>The page you are looking for could not be found</p>
				</PageContent>
			</PageContain>
		</PageSection>
	);
};

export default ErrorPage;
