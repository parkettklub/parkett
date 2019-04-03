/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'babel-polyfill'
import { setToken } from './src/utils/login'

exports.onClientEntry = () => {
    setToken();
}

 // You can delete this file if you're not using it