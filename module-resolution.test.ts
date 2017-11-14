/*
* Notice that typescript compiler does not complain : it expects implementation to comply with typedefs
*/
import unexportedReadbleColor from 'polished/lib/color/readableColor'

/*
 * The following works, but typings are lost:
 *
 * import readbleColor = require('polished/lib/color/readableColor')
 *
 * or
 *
 * import * as readbleColor from 'polished/lib/color/readableColor'
 */

describe('readableColor module', () => {
    it('should be exported to default', () => {
        expect(unexportedReadbleColor).toBeDefined()
    })
})
