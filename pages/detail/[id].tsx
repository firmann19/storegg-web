/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import TopUpForm from '../../components/organism/TopUpForm';
import TopUpItem from '../../components/organism/TopUpItem';
import Navbar from '../../components/organism/Navbar';
import Footer from '../../components/organism/Footer';
import { getDetailVoucher } from '../../services/player';

function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    name: '',
    thumbnail: '',
    category: {
      name: '',
    },
  });

  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(async (id) => {
    const data = await getDetailVoucher(id);
    console.log('data:', data);
    setDataItem(data.item);
    setNominals(data.detail.nominals);
    setPayments(data.payment);
  }, []);

  useEffect(() => {
    if (isReady) {
      console.log('router sudah tersedia', query.id);
      getVoucherDetailAPI(query.id);
    }
  }, [isReady]);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Detail;
