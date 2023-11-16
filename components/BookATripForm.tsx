import React, { FormEvent, useState } from 'react';
import styles from './BookATripForm.module.scss';

const BookATripForm = () => {
    const [isOneWay, setIsOneWay] = useState(false);
    const [childrenToggleOn, setChildrenToggle] = useState(false);
    const [infantCount, updateInfantCount] = useState(0);
    const [kidCount, updateKidCount] = useState(0);

    const submitHandler = (event: FormEvent) => {

    }
    return (
        <form onSubmit={submitHandler} className={styles.bookATrip}>
            <fieldset>
                <legend>Book a Flight</legend>
                <div className={styles.checkboxGroup}>
                    <label className={styles.chkLabel}>
                        <input type="checkbox" onChange={()=>setIsOneWay(!isOneWay)} />
                        One-Way
                    </label>
                    <label className={styles.chkLabel}>
                        <input type="checkbox" />
                        Use miles
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.inputTextlabel}>
                        From
                        <input type="text" name="departureCity" />
                    </label>
                    <span className={styles.inputTextlabel}>
                        To
                        <input type="text" name="arrivalCity" />
                    </span>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.inputTextlabel}>
                        Departure Date
                        <input type="date" name="departureDate" />
                    </label>
                    <span className={styles.inputTextlabel} hidden={isOneWay ? true : false}>
                        Return Date
                        <input type="date" name="returnDate" />
                    </span>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.inputTextlabel}>
                        Adults
                        <select name="adultCount">
                            <option>0 adults</option>
                            <option>1 adult</option>
                            <option>2 adults</option>
                            <option>3 adults</option>
                            <option>4 adults</option>
                            <option>5 adults</option>
                            <option>6 adults</option>
                            <option>7 adults</option>
                        </select>
                    </label>
                    <div className={styles.inputTextlabel}>
                        Children
                        <div id="childrenCountDropDown" className={styles.childrenDropDownToggle}>
                            <div className={styles.childrenDropDownToggle} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabIndex={0}>
                                <span id="numChildren">{infantCount} {infantCount === 1 ? 'child' : 'children'}</span>
                            </div>
                            <ul className={styles.dropdownMenu} hidden={childrenToggleOn ? false : true}>
                                <li className="children-infant">
                                    <input type="tel" id="childrenCount" name="ChildrenCount" className="form-control children-input" value="0" tabIndex={0} onChange={()=>updateInfantCount(infantCount + 1)} />
                                    <label htmlFor="childrenCount" style={{verticalAlign:'text-top'}}>Ages 2-17</label>
                                    <div className="symbol children-dropdown-icon-wrapper">
                                        <svg id="childrenMinus" className="children-dropdown-icon icon-minus-circle decrement-count" viewBox="0 0 512 512" style={{fill: 'rgb(200, 201, 199)'}}>
                                            <path d="m384 274l0-36c0-5-2-10-5-13c-4-4-8-6-13-6l-220 0c-5 0-9 2-13 6c-3 3-5 8-5 13l0 36c0 5 2 10 5 13c4 4 8 6 13 6l220 0c5 0 9-2 13-6c3-3 5-8 5-13z m91-18c0 40-9 77-29 110c-20 34-46 60-80 80c-33 20-70 29-110 29c-40 0-77-9-110-29c-34-20-60-46-80-80c-20-33-29-70-29-110c0-40 9-77 29-110c20-34 46-60 80-80c33-20 70-29 110-29c40 0 77 9 110 29c34 20 60 46 80 80c20 33 29 70 29 110z"></path>
                                        </svg>
                                        <svg className="children-dropdown-icon icon-plus-circle increment-count" viewBox="0 0 512 512">
                                            <path d="m384 274l0-36c0-5-2-10-5-13c-4-4-8-6-13-6l-73 0l0-73c0-5-2-9-6-13c-3-3-8-5-13-5l-36 0c-5 0-10 2-13 5c-4 4-6 8-6 13l0 73l-73 0c-5 0-9 2-13 6c-3 3-5 8-5 13l0 36c0 5 2 10 5 13c4 4 8 6 13 6l73 0l0 73c0 5 2 9 6 13c3 3 8 5 13 5l36 0c5 0 10-2 13-5c4-4 6-8 6-13l0-73l73 0c5 0 9-2 13-6c3-3 5-8 5-13z m91-18c0 40-9 77-29 110c-20 34-46 60-80 80c-33 20-70 29-110 29c-40 0-77-9-110-29c-34-20-60-46-80-80c-20-33-29-70-29-110c0-40 9-77 29-110c20-34 46-60 80-80c33-20 70-29 110-29c40 0 77 9 110 29c34 20 60 46 80 80c20 33 29 70 29 110z"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li className="children-infant">
                                    <input type="tel" className="form-control children-input" name="InfantCount" id="infantCount" value="0" tabIndex={0} onChange={()=>updateInfantCount(infantCount - 1)} />
                                    <label htmlFor="infantCount" style={{verticalAlign:'text-top'}}>Under 2 (on lap)</label>
                                    <div className="symbol children-dropdown-icon-wrapper">
                                        <svg id="infantMinus" className="children-dropdown-icon icon-minus-circle decrement-count" viewBox="0 0 512 512" style={{fill: 'rgb(200, 201, 199)'}}>
                                            <path d="m384 274l0-36c0-5-2-10-5-13c-4-4-8-6-13-6l-220 0c-5 0-9 2-13 6c-3 3-5 8-5 13l0 36c0 5 2 10 5 13c4 4 8 6 13 6l220 0c5 0 9-2 13-6c3-3 5-8 5-13z m91-18c0 40-9 77-29 110c-20 34-46 60-80 80c-33 20-70 29-110 29c-40 0-77-9-110-29c-34-20-60-46-80-80c-20-33-29-70-29-110c0-40 9-77 29-110c20-34 46-60 80-80c33-20 70-29 110-29c40 0 77 9 110 29c34 20 60 46 80 80c20 33 29 70 29 110z"></path>
                                        </svg>
                                        <svg id="infantPlus" className="children-dropdown-icon icon-plus-circle increment-count" viewBox="0 0 512 512">
                                            <path d="m384 274l0-36c0-5-2-10-5-13c-4-4-8-6-13-6l-73 0l0-73c0-5-2-9-6-13c-3-3-8-5-13-5l-36 0c-5 0-10 2-13 5c-4 4-6 8-6 13l0 73l-73 0c-5 0-9 2-13 6c-3 3-5 8-5 13l0 36c0 5 2 10 5 13c4 4 8 6 13 6l73 0l0 73c0 5 2 9 6 13c3 3 8 5 13 5l36 0c5 0 10-2 13-5c4-4 6-8 6-13l0-73l73 0c5 0 9-2 13-6c3-3 5-8 5-13z m91-18c0 40-9 77-29 110c-20 34-46 60-80 80c-33 20-70 29-110 29c-40 0-77-9-110-29c-34-20-60-46-80-80c-20-33-29-70-29-110c0-40 9-77 29-110c20-34 46-60 80-80c33-20 70-29 110-29c40 0 77 9 110 29c34 20 60 46 80 80c20 33 29 70 29 110z"></path>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )

}

export default BookATripForm;
