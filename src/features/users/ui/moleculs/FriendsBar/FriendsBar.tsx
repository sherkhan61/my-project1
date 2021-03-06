import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './FriendsBar.module.scss'
import avatar_undefined from '../../../../../ui/assets/images/avatar-undefined.jpg'
import {Link, NavLink} from 'react-router-dom'
import {getFriendsDemo} from '../../../modules/users/actions'
import {RootState} from '../../../../../lib/store/root-reducer'
import {Preloader} from '../../../../../ui/atoms/preloader/Preloader'


interface PropsType {
    clearPage: React.EventHandler<React.MouseEvent>
}

export const FriendsBar: FC<PropsType> = ({clearPage}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFriendsDemo(6, 1))
    }, [dispatch])

    const friends = useSelector((state: RootState) => state.usersPage.friends)

    const friendsElements = friends.map((friend) => {

        return (
            <div key={friend.id} className={styles.friend}>
                <Link to={`/profile/${friend.id}`}>
                    <img className={styles.friendPhoto}
                         src={friend.photos?.small || avatar_undefined}
                         alt=""/>
                    <p className={styles.friendName}>{friend.name}</p>
                </Link>
            </div>
        )
    })

    return (
        <>
            {friends.length === 0 ?
                <Preloader/> :
                <aside className={styles.friendsBar}>
                    <h3 onClick={clearPage}>
                        <NavLink
                            activeClassName={styles.active}
                            to="/friends">Friends</NavLink>
                    </h3>
                    <div className={styles.friendInfo}>
                        {friendsElements}
                    </div>
                </aside>}
        </>
    )
}