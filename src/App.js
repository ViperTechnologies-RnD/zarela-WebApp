import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import AppRouter from './Router';
import ToastifyContainer from './components/ToastifyContainer';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './state';
import { PendingFilesProvider } from './state/pendingFilesProvider';
import { LocalStorageProvider } from './state/localStorageProvider/LocalStoragePriveder';
import { NotificationProvider } from './state';
import { GlobalStyle } from './globalStyle';
import { theme } from './theme';
import getLibrary from './utils/getLibrary';
import ErrorBoundary from './ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="App">
			<ErrorBoundary>
				<Web3ReactProvider getLibrary={getLibrary}>
					<AppProvider>
						<PendingFilesProvider>
							<LocalStorageProvider>
								<ThemeProvider theme={theme}>
									<NotificationProvider>
										<AppRouter />
										<ToastifyContainer enableMultiContainer containerId={'toastify'} limit={3} />
										<GlobalStyle />
									</NotificationProvider>
								</ThemeProvider>
							</LocalStorageProvider>
						</PendingFilesProvider>
					</AppProvider>
				</Web3ReactProvider>
			</ErrorBoundary>
		</div>
	);
}

export default App;
