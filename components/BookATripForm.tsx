import React, { FormEvent, useEffect, useState, useRef } from 'react';
import styles from './BookATripForm.module.scss';
import { IconMinusFilled, IconPlusFilled } from './Icons';

const BookATripForm = () => {
	const [isOneWay, setIsOneWay] = useState<boolean>(false);
	const [childrenToggleHidden, updateHiddenChildrenToggle] = useState<boolean>(true);
	const [infantCount, updateInfantCount] = useState<number>(0);
	const [kidCount, updateKidCount] = useState<number>(0);
	const [totalKids, setTotalKids] = useState<number>(0);
	const childrenToggleRef = useRef<HTMLDivElement | null>(null);

	const increment = (counter, callback) => {
		if (counter < 6) {
			callback(counter + 1);
		}
	};
	const decrement = (counter, callback) => {
		if (counter > 0) {
			callback(counter - 1);
		}
	};
	useEffect(() => {
		setTotalKids(infantCount + kidCount);
	}, [infantCount, kidCount]);

	const submitHandler = (event: FormEvent) => {};
	const clickOutsideHandler = (event: MouseEvent) => {
		if (childrenToggleRef.current.contains(event.target as Node)) {
			return;
		}
		updateHiddenChildrenToggle(true);
	};
	useEffect(() => {
		document.addEventListener('mousedown', clickOutsideHandler);

		return function cleanup() {
			document.removeEventListener('mousedown', clickOutsideHandler);
		};
	}, []);
	return (
		<form onSubmit={submitHandler} className={styles.bookATrip}>
			<fieldset>
				<legend>Book a Flight</legend>
				<div className={styles.checkboxGroup}>
					<label className={styles.chkLabel}>
						<input type="checkbox" onChange={() => setIsOneWay(!isOneWay)} />
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
						<div id="childrenCountDropDown" className={styles.childrenDropDownToggle} ref={childrenToggleRef}>
							<div
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								tabIndex={0}
								onClick={() => updateHiddenChildrenToggle(false)}>
								<span id="numChildren">
									{totalKids} {totalKids > 1 ? 'children' : 'child'}
								</span>
								<span className={`${styles.icon} ${childrenToggleHidden === false ? styles.active : ''}`}></span>
							</div>
							<ul className={`${styles.dropdownMenu} ${childrenToggleHidden ? '' : styles.active}`}>
								<li className="children-infant">
									<input
										type="tel"
										id="InfantCount"
										name="InfantCount"
										className="form-control children-input"
										value={infantCount}
										tabIndex={0}
										onChange={(event) => updateInfantCount(event.target.value as unknown as number)}
									/>
									<label htmlFor="infantCount">Ages 2-17</label>
									<div className="symbol children-dropdown-icon-wrapper">
										<button type="button" onClick={() => decrement(infantCount, updateInfantCount)}>
											<IconMinusFilled />
										</button>
										<button type="button" onClick={() => increment(infantCount, updateInfantCount)}>
											<IconPlusFilled />
										</button>
									</div>
								</li>
								<li className="children-infant">
									<input
										type="tel"
										className="form-control children-input"
										name="KidCount"
										id="KidCount"
										value={kidCount}
										tabIndex={0}
										onChange={() => updateKidCount(kidCount - 1)}
									/>
									<label htmlFor="KidCount">Under 2 (on lap)</label>
									<div className="symbol children-dropdown-icon-wrapper">
										<button type="button" onClick={() => decrement(kidCount, updateKidCount)}>
											<IconMinusFilled />
										</button>
										<button type="button" onClick={() => increment(kidCount, updateKidCount)}>
											<IconPlusFilled />
										</button>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</fieldset>
			<input type="submit" />
		</form>
	);
};

export default BookATripForm;
