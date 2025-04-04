import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'
import { validateProfileData } from './validateProfileData'

const data = {
    username: 'admin',
    first: 'Svyatoslav',
    lastname: 'Rumyantsev',
    age: 44,
    country: Country.Russia,
    city: 'Verkhnyaya Troitsa',
    currency: Currency.RUB,
}

describe('validateProfileData.test', () => {

    test('success', () => {

        const result = validateProfileData(data)

        expect(result).toEqual([])
    })
    // 14:55
    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
 
    })

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ])
    })

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({ })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})
